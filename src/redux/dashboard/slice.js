import { createSlice } from "@reduxjs/toolkit";
import {
  deleteImageAction,
  getUserAction,
  updateMultipleImageAction,
  updateProfilePicAction,
  updateUserAction,
  getCurrentProfile,
  getNextProfile,
  getPreviousProfile,
  sendLike,
  getLikeList,
  getOtherUser,
  getChatList,
  getChatSearchList,
  getMessageChatAction,
  sendMessageAction,
  getLocationFilter,
  getRoomList,
  selectRoomAction,
  leaveRoomAction,
  getAvailableMatchesAction,
  getCurrentMatchesAction,
  getMyTournamentAction,
  getTournamentListAction,
  getNewsAction,
  getBadgeAction,
  getConsoleAction,
  getRecentEarnerAction,
  getEntryAmountAction,
  getGameModeAction,
  getGameModeCurrentMatchAction,
  getMatchReqCreateAction,
  getMatchReqUpdateAction,
  getMatchReqUpdateMultiPlayerAction,
  getMatchRuleAction,
  updateMatchAction,
  updateReadyStatusAction,
  matchResultAction,
  submitScoreAction,
  getFreePlayMatchReqCreateAction,
  getFreePlayMatchReqUpdateAction,
  freePlayUpdateMatchAction,
  freePlayUpdateReadyStatusAction,
  freePlayMatchResultAction,
  freePlaySubmitScoreAction,
  availableMatchJoinAction,
  freeAvailableMatchJoinAction,
  roomChatAction,
  sendRoomChatAction,
  disputesListAction,
  matchHistoryListAction,
  getProfileCardAction,
  getSeasonListAction,
  getGameWinLossAction,
  getBadgesAction,
  getGameHistoryAction,
  getBadgesListAction,
  getRoomChatThreadAction,
  userChatListAction,
  getChatListAction,
  sendChatAction,
  getDisputeChatAction,
  sendDisputeChatAction,
  createDisputesAction,
  getGameRemainAction,
  getBadgesDataAction,
  getSearchBadgesAction,
} from "./action";

const initialState = {
  userData: {},
  chatList: {},
  messages: {},
  isLoading: true,
  error: null,
  id: null,
  onlineUsers: [],
  latitude: null,
  longitude: null,
  filterLocation: {},
  distanceFilter: false,
  ageFilter: false,
  appliedFilter: false,
  moreInfo: [],
};

const DashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    userStore: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setId: (state, { payload }) => {
      state.id = payload;
    },
    chatStore: (state, { payload }) => {
      state.chatList = payload;
      state.isLoading = false;
    },
    getMessage: (state, { payload }) => {
      state.messages = payload;
      state.isLoading = false;
    },
    setOnlineUsers: (state, { payload }) => {
      state.onlineUsers = payload;
    },
    setGeolocation: (state, { payload }) => {
      state.latitude = payload.latitude;
      state.longitude = payload.longitude;
    },
    setFilterLocation: (state, { payload }) => {
      state.filterLocation = payload;
    },
    setDistanceFilter: (state, { payload }) => {
      state.distanceFilter = payload;
    },
    setAgeFilter: (state, { payload }) => {
      state.ageFilter = payload;
    },
    setAppliedFilter: (state, { payload }) => {
      // console.log("payload AppliedFilter", payload);
      state.appliedFilter = payload;
    },
    setMoreInfoSections: (state, { payload }) => {
      state.moreInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRoomList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(selectRoomAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(selectRoomAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(selectRoomAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      .addCase(getAvailableMatchesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailableMatchesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAvailableMatchesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      .addCase(getCurrentMatchesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentMatchesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentMatchesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getMyTournamentAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyTournamentAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyTournamentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getTournamentListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTournamentListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTournamentListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getNewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNewsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getBadgeAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBadgeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBadgeAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getConsoleAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConsoleAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getConsoleAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getRecentEarnerAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecentEarnerAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecentEarnerAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(sendRoomChatAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendRoomChatAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sendRoomChatAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getProfileCardAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfileCardAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProfileCardAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getSeasonListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeasonListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSeasonListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(matchHistoryListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(matchHistoryListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(matchHistoryListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(disputesListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(disputesListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(disputesListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getEntryAmountAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEntryAmountAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getEntryAmountAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getGameWinLossAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGameWinLossAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGameWinLossAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getBadgesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBadgesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBadgesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getGameModeAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGameModeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGameModeAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getMatchRuleAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMatchRuleAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMatchRuleAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(updateMatchAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMatchAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateMatchAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(updateReadyStatusAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReadyStatusAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateReadyStatusAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      .addCase(matchResultAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(matchResultAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(matchResultAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      ///
      .addCase(getFreePlayMatchReqCreateAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFreePlayMatchReqCreateAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFreePlayMatchReqCreateAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getFreePlayMatchReqUpdateAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFreePlayMatchReqUpdateAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFreePlayMatchReqUpdateAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(freePlayUpdateMatchAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(freePlayUpdateMatchAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(freePlayUpdateMatchAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(freePlayUpdateReadyStatusAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(freePlayUpdateReadyStatusAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(freePlayUpdateReadyStatusAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(freePlayMatchResultAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(freePlayMatchResultAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(freePlayMatchResultAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(freePlaySubmitScoreAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(freePlaySubmitScoreAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(freePlaySubmitScoreAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(availableMatchJoinAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(availableMatchJoinAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(availableMatchJoinAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(freeAvailableMatchJoinAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(freeAvailableMatchJoinAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(freeAvailableMatchJoinAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getGameRemainAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGameRemainAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGameRemainAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getSearchBadgesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchBadgesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchBadgesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getBadgesDataAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBadgesDataAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBadgesDataAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(roomChatAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(roomChatAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(roomChatAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(sendChatAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendChatAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sendChatAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      ///
      .addCase(submitScoreAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitScoreAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(submitScoreAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      .addCase(getGameModeCurrentMatchAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGameModeCurrentMatchAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGameModeCurrentMatchAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getMatchReqCreateAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMatchReqCreateAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMatchReqCreateAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getBadgesListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBadgesListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBadgesListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getMatchReqUpdateAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMatchReqUpdateAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMatchReqUpdateAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getRoomChatThreadAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomChatThreadAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRoomChatThreadAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getChatListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChatListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getChatListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(userChatListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userChatListAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userChatListAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(createDisputesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDisputesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createDisputesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getDisputeChatAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDisputeChatAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDisputeChatAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(sendDisputeChatAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendDisputeChatAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sendDisputeChatAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getGameHistoryAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGameHistoryAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGameHistoryAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })
      .addCase(getMatchReqUpdateMultiPlayerAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getMatchReqUpdateMultiPlayerAction.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getMatchReqUpdateMultiPlayerAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      })

      .addCase(leaveRoomAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(leaveRoomAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(leaveRoomAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error fetching user data";
      });
  },
});

export const dashboardApiSliceReducer = DashboardSlice.reducer;

export const {
  userStore,
  setLoading,
  setId,
  setOnlineUsers,
  setGeolocation,
  setFilterLocation,
  setAgeFilter,
  setDistanceFilter,
  setAppliedFilter,
  setMoreInfoSections,
} = DashboardSlice.actions;
