import AppConstants from '../constants/app-constants'
import { dispatch, register } from '../dispatchers/app-dispatcher'

export default {
    getBatchRecords( batchNumber ){
        dispatch( {
            actionType: AppConstants.GET_BATCH_RECORDS,
            batchNumber: batchNumber
        } )
    }
}
