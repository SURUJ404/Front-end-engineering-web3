import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '7ik0ajar',
  dataset: 'production',
  apiVersion: '2024-03-12', // use current UTC date - see "specifying API version"!
  token:
    'sk7AcKEDljKfMVDjxPOmihO2VHcQZJs5mFpAZWI0Ek20kYujvDpAt5c8CILgtnUyRN20nGoTwPmSWOMT33gYOFKZGEBEYwl8tq436XOWOvjHPsFqDI8B4JPCCJD4nn5dtDwm9eTjsqTLOgPIxPR0Aj2HdLBnLN5f87VEEqhnr8ZW0cbaxM1V', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})