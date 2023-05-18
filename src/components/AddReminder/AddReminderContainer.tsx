import { connect } from "react-redux";
import AddReminder from "./AddReminder";
import { addReminder, closeAddReminder, ReminderDTO } from "../../redux/actions";

interface State {
  addReminderStatus: {
    isOpen: boolean;
  };
}

const mapStateToProps = (state: State) => {
  return {
    isOpen: state.addReminderStatus.isOpen,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClose: () => {
      dispatch(closeAddReminder());
    },
    addReminder: (reminder: ReminderDTO) => {
      dispatch(addReminder(reminder))
    }
  };
};

const AddReminderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReminder);

export default AddReminderContainer;
