export const BankDisconnectWarning = ({
  showDisconnectConfirm,
  setShowDisconnectConfirm,
  isLoading,
  connectedInstitution,
  disconnectBankHandler,
}: {
  showDisconnectConfirm: boolean;
  setShowDisconnectConfirm: Function;
  isLoading: boolean;
  connectedInstitution: string | null;
  disconnectBankHandler: Function;
}): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* <-- NEW: Inline Warning UI for Disconnecting --> */}
      {!showDisconnectConfirm ? (
        <button
          type="button"
          onClick={() => setShowDisconnectConfirm(true)}
          disabled={isLoading || !connectedInstitution}
          style={{
            padding: "16px",
            backgroundColor: "transparent",
            color: isLoading || !connectedInstitution ? "#a0aec0" : "#e53e3e",
            border:
              isLoading || !connectedInstitution
                ? "1px solid #cbd5e0"
                : "1px solid #e53e3e",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor:
              isLoading || !connectedInstitution ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          Disconnect Bank
        </button>
      ) : (
        <div
          style={{
            padding: "16px",
            backgroundColor: "#fff5f5",
            border: "1px solid #fc8181",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              color: "#c53030",
              margin: "0 0 12px 0",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Are you sure you want to disconnect? This will stop syncing your
            transactions.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={async () => {
                await disconnectBankHandler();
                setShowDisconnectConfirm(false);
              }}
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#e53e3e",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.7 : 1,
              }}
            >
              {isLoading ? "Disconnecting..." : "Yes, Disconnect"}
            </button>
            <button
              type="button"
              onClick={() => setShowDisconnectConfirm(false)}
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "transparent",
                color: "#4a5568",
                border: "1px solid #cbd5e0",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
