const masterState = {
    loggedUserId: null,
    memberId: null,
    AllUsers: [],
    selectedNavTab: 0,
    selectedTabType: "dashboard",
    pageColor: "#4a499e",
    selectedBusiness: {
      id: null,
      name: null,
      balance: null,
      members: [],
      lessons: [],
      owners: [],
    },
    selectedBusinessMembership: { id: null, business: {}, user: {} },
    user: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      userLayout: { backgroundColor: "#ffffff" },
    },
    myBusinesses: [],
    myMemberships: [],
    myNextMemberships: [],
    myStudyLessons: [],
    year: 2022,
    monthList: [
      { name: "January", monthId: 0, monthIndex: 1},
      { name: "February", monthId: 3, monthIndex: 2},
      { name: "March", monthId: 3, monthIndex: 3},
      { name: "April", monthId: 6, monthIndex: 4},
      { name: "May", monthId: 1, monthIndex: 5},
      { name: "June", monthId: 4, monthIndex: 6},
      { name: "July", monthId: 6, monthIndex: 7},
      { name: "August", monthId: 2, monthIndex: 8},
      { name: "September", monthId: 5, monthIndex: 9},
      { name: "October", monthId: 0, monthIndex: 10},
      { name: "November", monthId: 3, monthIndex: 11},
      { name: "December", monthId: 5, monthIndex: 12},
    ],
    selectedMonth: { name: "January", monthId: 0, monthIndex: 1},
    bookings: [
      { type: "study", date: "2022-1-3", studio: "ghibli" },
      { type: "study", date: "2022-1-15", studio: "ghibli" },
      { type: "teach", date: "2022-02-3", studio: "ghibli" },
      { type: "teach", date: "2022-1-5", studio: "ghibli" },
    ],
    selectedMonthIndex: 0,
    testDate: "2022-01-1",
    selectedPage: "Schedule",
    showTeacherBio: false,
  };


  export default masterState;