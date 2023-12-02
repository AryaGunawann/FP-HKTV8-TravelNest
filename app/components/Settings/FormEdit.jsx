import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";
import { useRouter } from "expo-router";
import styles from "./FormEdit.style";
import { useDispatch, useSelector } from "react-redux";
import { logout, editUser } from "../../../redux/slice/authSlice";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLOR from "../../../constants/color";

const FormEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { email, password, fullName, telp } = useSelector(
    (state) => state.auth
  );

  let testEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const [newFullName, setNewFullName] = useState(fullName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newTelp, setNewTelp] = useState(telp);
  const [showPassword, setShowPassword] = useState(true);
  const [errorFullName, setErrorFullName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorTelp, setErrorTelp] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const submitHandler = () => {
    if (newFullName == "") {
      return setErrorFullName(true);
    }

    if (newEmail == "" || testEmail.test(newEmail) === false) {
      return setErrorEmail(true);
    }

    if (newPassword == "") {
      return setErrorPassword(true);
    }

    if (newTelp == "" || !parseInt(newTelp)) {
      return setErrorTelp(true);
    }
    dispatch(
      editUser({
        fullName: newFullName,
        email: newEmail,
        password: newPassword,
        telp: newTelp,
      })
    );
    setOpenModal(!openModal);
    console.log("updated");
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setModalVisible(!openModal)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setOpenModal(!openModal)}
              style={{ alignSelf: "flex-end" }}>
              <MaterialCommunityIcons name="close" size={18} />
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="check-circle"
              size={70}
              color="green"
            />
            <Text style={{ fontFamily: "DMRegular", fontSize: 20 }}>
              Successfully Updated.
            </Text>
          </View>
        </View>
      </Modal>
      <Text style={styles.head}>Edit Profile</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fullname</Text>
        <TextInput
          value={newFullName}
          style={styles.input}
          onChangeText={(inputFullName) => {
            setErrorFullName(false);
            setNewFullName(inputFullName);
          }}
        />
        {errorFullName && (
          <Text style={{ fontFamily: "DMMedium", color: "red" }}>
            Wrong fullname format.
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          keyboardType="email-address"
          value={newEmail}
          style={styles.input}
          onChangeText={(inputEmail) => {
            setErrorEmail(false);
            setNewEmail(inputEmail);
          }}
        />
        {errorEmail && (
          <Text style={{ fontFamily: "DMMedium", color: "red" }}>
            Wrong email format.
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={showPassword}
          value={newPassword}
          style={styles.input}
          onChangeText={(inputPassword) => {
            setErrorPassword(false);
            setNewPassword(inputPassword);
          }}
        />
        {errorPassword && (
          <Text style={{ fontFamily: "DMMedium", color: "red" }}>
            Wrong password format.
          </Text>
        )}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => setShowPassword((prev) => !prev)}>
          <MaterialCommunityIcons
            name={!showPassword ? "eye-off" : "eye"}
            size={20}
          />
          <Text>{!showPassword ? "Hide Password" : "Show Password"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number</Text>
        <TextInput
          keyboardType="numeric"
          value={newTelp}
          style={styles.input}
          onChangeText={(inputTelp) => {
            setErrorTelp(false);
            setNewTelp(inputTelp);
          }}
        />
        {errorTelp && (
          <Text style={{ fontFamily: "DMMedium", color: "red" }}>
            Wrong number format.
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={submitHandler} style={styles.save}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "DMBold",
            fontSize: 17,
          }}>
          Save changes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleLogout();
        }}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormEdit;
