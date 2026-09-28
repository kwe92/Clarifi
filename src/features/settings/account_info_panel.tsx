import TextFormField from "../shared/components/text_form_field";
import { useSettingsData } from "./context/settings_context";
import { useTabFormData } from "./context/tab_form_context";
import * as gaps from "../../app/constants/reusable";
import MainButton from "../shared/components/main_button";

export const AccountInfoPanel = () => {
  const { isLoading } = useSettingsData();

  const {
    activeTab,
    name,
    email,
    nameError,
    emailError,
    setName,
    setEmail,
    setNameError,
    setEmailError,
    handleAccountSubmit,
  } = useTabFormData();
  return (
    <form
      className={`form-panel ${activeTab === 0 ? "active" : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextFormField
        name="name"
        label="Name"
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => {
          setNameError(false);
          setName(e.target.value);
        }}
      />
      {nameError && <p className="error-text">Name cannot be empty</p>}

      <gaps.GapH16 />

      <TextFormField
        name="email"
        label="Email"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => {
          setEmailError(false);
          setEmail(e.target.value);
        }}
      />
      {emailError && <p className="error-text">Enter a valid email address</p>}

      <gaps.GapH32 />

      <MainButton
        type="submit"
        onTap={handleAccountSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save Changes"}
      </MainButton>
    </form>
  );
};
