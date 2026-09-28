import "./css/tabs_form.css";
import { useSettingsData } from "../context/settings_context";
import { useTabFormData } from "../context/tab_form_context";
import { BankConnectionPanel } from "./bank_connection_panel";
import { ChangePasswordPanel } from "./change_password_panel";
import { AccountInfoPanel } from "../account_info_panel";

export default function TabsForm(): JSX.Element {
  const { error, successMessage } = useSettingsData();

  const { activeTab, handleTabSwitch } = useTabFormData();

  const tabNames = ["Account Info", "Change Password", "Bank Connection"];

  const tabButtons = tabNames.map((name, i) => {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === i}
        className={`tab-btn ${activeTab === i ? "active" : ""}`}
        onClick={() => handleTabSwitch(i)}
      >
        {name}
      </button>
    );
  });

  return (
    <div className="tab-container">
      {/* Tab Header Navigation */}
      <div className="tab-buttons" role="tablist">
        {tabButtons}
      </div>

      <div className="tab-content">
        {/* Status Messages */}
        {error && <p className="error-text settings-banner-error">{error}</p>}
        {successMessage && (
          <p className="success-text settings-banner-success">
            {successMessage}
          </p>
        )}

        {/* ================= Panel 0: Account Information ================= */}
        <AccountInfoPanel />

        {/* ================= Panel 1: Change Password ================= */}
        <ChangePasswordPanel />

        {/* ================= Panel 2: Bank Connection ================= */}
        <BankConnectionPanel />
      </div>
    </div>
  );
}
