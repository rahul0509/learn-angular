export interface Recipient {
  // pagecount: number;
  // query: {
  //   recipientId: number;
  //   name: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   dob: string;
  //   income: number
  //   title: string;
  //   company: string;
  //   workPhone: string;
  //   mobile: string;
  //   address: string;
  //   city: string;
  //   state: string;
  //   country: string;
  //   zip: string;
  //   isUnsubscribe: boolean;
  // };
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  geo: {
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
}
