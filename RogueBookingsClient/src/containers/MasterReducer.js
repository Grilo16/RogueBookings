const reducer = (state, action) => {
    let nextIndex;
    switch (action.type) {
      case "LoadAllUsers":
        return { ...state, AllUsers: [...action.users] };
  
      case "LoadLoggedInUser":
        return { ...state, user: { ...action.user }, loggedUserId: action.user.id};
  
      case "LoadMyBusinesses":
        return { ...state, myBusinesses: [...action.businesses] };
  
      case "LoadMyMemberships":
        return { ...state, myMemberships: [...action.memberships] };
  
  
      case "LoadMyNextMemberships":
        return { ...state, myNextMemberships: [...action.memberships] };
  
      case "LoadMyStudyLessons":
        return { ...state, myStudyLessons: [...action.studyLessons] };
  
      case "SelectNavTab":
        return { ...state, selectedNavTab: action.selectedNavTab };
  
      case "SetNavTabType":
        return { ...state, selectedTabType: action.tabType };
  
      case "SetSelectedBusiness":
        return { ...state, selectedBusiness: action.business };
  
      case "SetSelectedBusinessMembership":
        return { ...state, selectedBusinessMembership: action.membershipId };
  
      case "SetPageColor":
        return { ...state, pageColor: action.color };
  
      case "GoNextMonth":
        nextIndex = (state.selectedMonthIndex + 1) % state.monthList.length;
        return {
          ...state,
          selectedMonth: { ...state.monthList[nextIndex] },
          selectedMonthIndex: nextIndex,
        };
  
      case "GoPrevMonth":
        nextIndex =
          state.selectedMonthIndex === 0 ? 11 : state.selectedMonthIndex - 1;
        return {
          ...state,
          selectedMonth: { ...state.monthList[nextIndex] },
          selectedMonthIndex: nextIndex,
        };
  

        case "SelectPage":
            return {...state, selectedPage : action.selectedPage}


        case "ToggleTeacherBio":
            return {...state, showTeacherBio: !state.showTeacherBio}

        case "SetMemberId":
            return {...state, memberId: action.memberId}

      default:
        return state;
    }
  };

  export default reducer;