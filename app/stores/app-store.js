import {dispatch, register} from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  fetchBatchRecords() {
    get("api/batchRecords").then((data) => {
      batchRecords = data
    })
  }
})

export default AppStore;
