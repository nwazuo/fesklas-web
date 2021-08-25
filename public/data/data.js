export const customerData = {
  first_name: 'Adebisi',
  last_name: 'Osinachi',
  UAID: 'u8399d',
  email_address: 'adebisiosinachi@ngmail.com',
  is_verified: true,
  phone_no: '08086903848',
  apartment_address: 'No. 34 Ikenegbu Street, Owerri, Imo State',
};

export const verificationData = {
  verified_address: 'No. 34 Ikenegbu Street, Owerri, Imo State',
  verification_date: '24th February, 2021',
  apartment_pictures: ['/images/apartment1.webp', '/images/apartment2.webp'],
};

export const subscriptionData = {
  is_subscribed: true,
  current_subscription: 'BASIC',
  total_service_days: 6,
  fulfilled_service_days: 2,
  subscription_start_date: '16-08-2021',
  subscription_end_date: '12-09-2021',
};

// Dashboard Tab
export const donutChartConfigData = {
  type: 'pie',
  theme: 'light',
  dataProvider: [
    {
      title: 'Fulfilled',
      value: 2,
    },
    {
      title: 'Unfulfilled',
      value: 4,
    },
  ],
  titleField: 'title',
  valueField: 'value',
  labelRadius: 5,

  radius: '42%',
  innerRadius: '60%',
  labelText: '[[title]] [[value]]',
  export: {
    enabled: true,
  },
};
