export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    },
  ],
};