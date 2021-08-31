export const employeeData = {
  first_name: 'Onyemaechi',
  last_name: 'Clementine',
  email_address: 'onyeclem@ngmail.com',
  employee_type: 'customer_agent',
  phone_no: '08086903848',
};

export const employeeWorkData = {
  unverified_customers: 22,
  verified_customers: 5,
  unreplied_feedback: 8
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
