const img = require('../assets/goat.png');
const img_chipper = require("../assets/chipper_logo.png");



export const mock_transaction = [
  {
    type: "withdraw",
    image: require("../assets/goat.png"),
    action: "You cashed out",
    time: "Today at 4:06 AM",
    amount: "- ₦10,000.00",
    acc_no: "• 4581",
    message: "Cash out to Zenith Bank • 4582 is complete",
  },

  {
    type: "airtime",
    image: { img },
    action: "You purchased Airtime",
    time: "Today at 4:10 AM",
    amount: "₦4,950.00",
    credit_amount: "₦5,000.00",
    mob_no: "+234 807 542 2354",
    saved: "₦50.00",
  },

  {
    type: "withdraw",
    image: { img },
    action: "You cashed out",
    time: "Yesterday at 11:36 AM",
    amount: "- ₦12,000.00",
    message: "Cash out to Zenith Bank • 0002 is complete",
  },

  {
    type: "withdraw",
    image: { img },
    action: "You cashed out",
    time: "Wednessday at 2:16 PM",
    amount: "- ₦19,000.00",
    message: "Cash out to Zenith Bank • 0002 is complete",
  },

  {
    type: "airtime",
    image: { img },
    action: "You purchased Airtime",
    time: "Monday at 8:00 PM",
    amount: "₦3,950.00",
    credit_amount: "₦4,000.00",
    mob_no: "+234 807 542 2354",
    saved: "₦50.00",
  },

  {
    type: "credit",
    image: { img },
    action: "Incoming Payment to your Chipper Account Number",
    time: "Feb 17 at 11:07 AM",
    amount: "+ ₦50,000.00",
    message:
      "Incoming Payment to your Account Number 605*****143 - From Fashina O O MR, 000*******65 via Union_Bank",
  },

  {
    type: "airtime",
    image: { img },
    action: "You purchased Airtime",
    time: "Feb 11 at 3:30 PM",
    amount: "₦4,950.00",
    credit_amount: "₦5,000",
    mob_no: "+234 807 542 2354",
    saved: "₦50.00",
  },

  {
    type: "airtime",
    image: { img },
    action: "You purchased Airtime",
    time: "Feb 5 at 12:10 PM",
    amount: "₦4,950.00",
    credit_amount: "₦5,000",
    mob_no: "+234 807 542 2354",
    saved: "₦50.00",
  },

  {
    type: "credit",
    image: { img },
    action: "Incoming Payment to your Chipper Account Number",
    time: "Feb 2 at 11:07 AM",
    amount: "+ ₦75,000.00",
    message:
      "Incoming Payment to your Account Number 605*****143 - From Fashina O O MR, 000*******65 via Union_Bank",
  },

  {
    type: "refund",
    image: { img_chipper },
    action: "Chipper Nigeria paid you",
    time: "Jan 30 at 9:02 PM",
    amount: "+ ₦15,000.00",
    message:
      "Unfortunately we were unable to process your withdrawal. It has been refunded. Please try again later.",
  },

  {
    type: "withdraw",
    image: { img },
    action: "You cashed out",
    time: "Jan 30 at 4:08 PM",
    amount: "- ₦15,000.00",
    message: "Cash out to Zenith Bank • 0002 is pending",
  },

  {
    type: "airtime",
    image: { img },
    action: "You purchased Airtime",
    time: "Jan 17 at 3:10 AM",
    amount: "₦3,950.00",
    credit_amount: "₦4,000.00",
    mob_no: "+234 807 542 2354",
    saved: "₦50.00",
  },

  {
    type: "withdraw",
    image: { img },
    action: "You cashed out",
    time: "Jan 01 at 10:05 AM",
    amount: "- ₦10,000.00",
    message: "Cash out to Wema Bank • 4581 is complete",
  },
];
