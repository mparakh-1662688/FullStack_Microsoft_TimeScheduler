import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import uuidv1 from 'uuid/v1';
let ans = require('../../Backend/db/api_call');

Vue.use(Vuex)

import { API_ENDPOINT } from './config';
let temp = (`${API_ENDPOINT}/peek`);

export default new Vuex.Store({
    
    state: {
        events: [],
        basicToken: false
    },
    mutations: {
        submitBasicToken: function( state, token ) {
            state.basicToken = `basic ${token}`;
        },
        updateList: function( state, list ) {
            let tempArray = [];
            let finalJson = [];
            let events = [];
            let dates = [];
            for (let i = 0; i < list.message.length; i++ ) {
              let curr = list.message[i].data[0]
              let currDate = curr.dateTime.split("T")[0]
              if (dates.includes(currDate)) {
                break;
              }
              for (let j = 0; j < list.message.length; j++) {
                dates.push(currDate);
                let next = list.message[j].data[0]
                if (currDate === next.dateTime.split("T")[0]) {
                  if (!events.includes(next)) {
                    events.push(next)
                  }
                }
                if (j + 1 === list.message.length) {
                  finalJson.push({ 
                    date: currDate,
                    events: events
                  })
                  events = []
                }

              }
            }
            state.events = finalJson;
        }
    },
    actions: {
        deleteEvent: function( { commit, state }, eventId  ) {
          return axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/remove/${eventId}`,
            headers: { authorization: state.basicToken }
          });
        },
        modifyEvent: function( { commit, state }, calendarEvent ) {
          return axios({
            method: 'PUT',
            url: `${API_ENDPOINT}/update/${calendarEvent.id}`,
            data: {'data': [calendarEvent]},
            headers: { authorization: state.basicToken }
          });
        },
        createEvent: function( { commit, state }, calendarEvent ) { 
          calendarEvent.id = uuidv1();
          return axios({
            method: 'POST',
            url: `${API_ENDPOINT}/create/${calendarEvent.id}`,
            data: {'data': [calendarEvent]},
            headers: { authorization: state.basicToken }

          });
        },
        checkBasicToken: function( { commit, state }, token ) {
          return axios({
            method: 'GET',
            url: `${API_ENDPOINT}/check`,
            headers: { authorization: `basic ${token}` }
          });
        },
        getList: function( { commit, state } ) {
            return axios({
            method: 'GET',
            url: `${API_ENDPOINT}/peek`,
            headers: { authorization: state.basicToken }
          }).then( res => {
            commit( 'updateList', res.data );
          });
        }
    }
})
