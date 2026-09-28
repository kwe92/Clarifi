import TextFormField from "../../shared/components/text_form_field";
import { useTabFormData } from "../context/tab_form_context";
import * as gaps from "../../../app/constants/reusable";
import MainButton from "../../shared/components/main_button";
import { useSettingsData } from "../context/settings_context";

export const ChangePasswordPanel = () => {
  const {
    activeTab,
    currentPassword,
    newPassword,
    confirmPassword,
    showCurrentPassword,
    showNewPassword,
    showConfirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    toggleShowCurrentPassword,
    toggleShowNewPassword,
    toggleShowConfirmPassword,
    currentPasswordError,
    newPasswordError,
    isShortPassword,
    passwordMismatch,
    setCurrentPasswordError,
    setNewPasswordError,
    setIsShortPassword,
    setPasswordMismatch,
    handlePasswordSubmit,
  } = useTabFormData();

  const { isLoading } = useSettingsData();

  return (
    <form
      className={`form-panel ${activeTab === 1 ? "active" : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextFormField
        showPasswordIcon={true}
        name="currentPassword"
        label="Current Password"
        type={showCurrentPassword}
        placeholder="Enter current password"
        value={currentPassword}
        onChange={(e) => {
          setCurrentPasswordError(false);
          setCurrentPassword(e.target.value);
        }}
        onIconTap={toggleShowCurrentPassword}
      />
      {currentPasswordError && (
        <p className="error-text">Current password is required</p>
      )}

      <gaps.GapH16 />

      <TextFormField
        showPasswordIcon={true}
        name="newPassword"
        label="New Password"
        type={showNewPassword}
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => {
          setNewPasswordError(false);
          setIsShortPassword(false);
          setNewPassword(e.target.value);
        }}
        onIconTap={toggleShowNewPassword}
      />
      {newPasswordError && (
        <p className="error-text">New password is required</p>
      )}

      <gaps.GapH16 />

      <TextFormField
        showPasswordIcon={true}
        name="confirmPassword"
        label="Confirm Password"
        type={showConfirmPassword}
        placeholder="Re-enter new password"
        value={confirmPassword}
        onChange={(e) => {
          setPasswordMismatch(false);
          setConfirmPassword(e.target.value);
        }}
        onIconTap={toggleShowConfirmPassword}
      />
      {passwordMismatch && <p className="error-text">Passwords do not match</p>}

      <gaps.GapH12 />

      <p
        style={{
          textAlign: "right",
          color: !isShortPassword ? "#696868" : "red",
          fontSize: "12px",
          fontWeight: !isShortPassword ? "normal" : "bold",
        }}
      >
        Passwords must be at least 8 characters
      </p>

      <gaps.GapH32 />

      <MainButton
        type="submit"
        onTap={handlePasswordSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update Password"}
      </MainButton>
    </form>
  );
};
