import { StyleSheet } from 'react-native';
import COLOR from '../../../../constants/color';

const styles = StyleSheet.create({
  container: {
    margin: 12,
    gap: 1,
    borderRadius: 10,
    padding: 30,
    backgroundColor: COLOR.primary,
    borderColor: '#EAEAEA',
    borderWidth: 1,
  },

  searchInput: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.lightGray,
    color: 'white',
    fontFamily: 'DMRegular'
  },

  btnDateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btnDate: {
    borderColor: COLOR.lightGray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },

  btnDateText: {
    textAlign: 'center',
    fontFamily: 'DMMedium',
    color: COLOR.lightGray,
  },

  checkText: {
    fontFamily: 'DMRegular',
    color: 'white',
  },

  icon: {
    width: 20,
    height: 20,
    color:"white"
  },

  btnSearch: {
    marginTop: 10,
    backgroundColor: COLOR.accent,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 3,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
