import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
const { height, width } = Dimensions.get("window");
export default function RoutineScreen() {
  return (
    <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={months => {
        console.log("now these months are visible", months);
      }}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
      // Enable horizontal scrolling, default = false
      horizontal={true}
      // Enable paging on horizontal, default = false
      pagingEnabled={true}
      // Set custom calendarWidth.
      calendarWidth={width}
      // Initially visible month. Default = Date()
      // current={"2020-04-03"}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      // minDate={"2012-05-10"}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      // maxDate={"2012-05-30"}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log("selected day", day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      // onDayLongPress={day => {
      //   console.log("selected day", day);
      // }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={"MM yyyy"}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={month => {
        console.log("month changed", month);
      }}
      // Hide month navigation arrows. Default = false
      hideArrows={false}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      // renderArrow={direction => <Arrow />}
      // Do not show days of other months in month page. Default = false
      // hideExtraDays={true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      // disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={false}
      // Show week numbers to the left. Default = false
      showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={substractMonth => substractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      // disableArrowLeft={true}
      // Disable right arrow. Default = false
      // disableArrowRight={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: width
  }
});
