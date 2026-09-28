import { useState } from "react";
import { useSettingsData } from "../context/settings_context";
import { useTabFormData } from "../context/tab_form_context";
import { BankDisconnectWarning } from "./bank_disconnect_warning";
import { GapH32 } from "../../../app/constants/reusable";

export const BankConnectionPanel = () => {
  const { isLoading, connectedInstitution, disconnectBankHandler } =
    useSettingsData();

  const { activeTab } = useTabFormData();

  const [showDisconnectConfirm, setShowDisconnectConfirm] =
    useState<boolean>(false);

  return (
    <div className={`form-panel ${activeTab === 2 ? "active" : ""}`}>
      <div
        style={{
          padding: "16px",
          backgroundColor: "#f8fafc",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: "16px",
            color: "#201f24",
          }}
        >
          Connected Institution
        </h3>
        {isLoading && connectedInstitution === null ? (
          <p style={{ margin: 0, color: "#696868", fontSize: "14px" }}>
            Loading...
          </p>
        ) : connectedInstitution ? (
          <p
            style={{
              margin: 0,
              color: "#277c78",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {connectedInstitution}
          </p>
        ) : (
          <p style={{ margin: 0, color: "#696868", fontSize: "14px" }}>
            No bank account currently connected.
          </p>
        )}
      </div>
      <BankDisconnectWarning
        showDisconnectConfirm={showDisconnectConfirm}
        setShowDisconnectConfirm={setShowDisconnectConfirm}
        isLoading={isLoading}
        connectedInstitution={connectedInstitution}
        disconnectBankHandler={disconnectBankHandler}
      />
      <GapH32 />
    </div>
  );
};
