import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'

export function receiveBatchRecordResponse(response) {
  dispatch({
    actionType: AppConstants.GET_BATCH_RECORDS_RESPONSE,
    response: response,
  })
}
