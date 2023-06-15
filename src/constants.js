export const DEFAULT_DATE_FORMAT = "Do MMMM YYYY"
export const BASE_URL = "https://api.spacexdata.com/v3/launches"

export const LAUNCH_TYPES = [
    {title: 'All Launches', key: 'all'}, 
    {title: 'Upcomming Launches', key: 'upcoming'}, 
    {title: 'Successful Launches', key: 'success'}, 
    {title: 'Failed Launches', key: 'failed'}
]

export const PICKER_ARR = ['Every till now', 'Past week', 'Past month', 'Past 3 months', 'Past 6 months', 'Past year', 'Past 5 years', 'Past 10 years', 'Past 15 years']

export const DATE_OPTIONS = {
    'Past week': {
      unit: 'weeks',
      value: 1,
    },
    'Past month': {
      unit: 'months',
      value: 1,
    },
    'Past 3 months': {
      unit: 'months',
      value: 3,
    },
    'Past 6 months': {
      unit: 'months',
      value: 6,
    },
    'Past year': {
      unit: 'years',
      value: 1,
    },
    'Past 5 years': {
      unit: 'years',
      value: 5,
    },
    'Past 10 years': {
      unit: 'years',
      value: 10,
    },
    'Past 15 years': {
      unit: 'years',
      value: 15,
    },
    'Every till now': {
      unit: 'years',
      value: 100
    }
};