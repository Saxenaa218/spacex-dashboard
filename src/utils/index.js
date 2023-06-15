import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../constants';

export const formatDate = (date) => {
    return moment(date).format(DEFAULT_DATE_FORMAT)+' at '+ moment(date).format('hh:mm')
}
