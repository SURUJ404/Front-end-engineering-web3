// import {defineField, defineType} from 'sanity'

// export const eventType = defineType({
//   name: 'event',
//   title: 'Coins',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       type: 'string',
//     }),
//   ],
// })




import { defineField, defineType } from 'sanity';

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'symbol',
      title: 'Symbol',
      type: 'string',
    }),
    defineField({
      name: 'contractAddress',
      title: 'Contract Address',
      type: 'string',
    }),
    defineField({
      name: 'usdPrice',
      title: 'USD Price',
      type: 'number', // Use 'number' for numerical values
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
});


