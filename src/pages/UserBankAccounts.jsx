import React, { useState } from "react";
import BankAccountsTable from "../components/UserBankAccountsComponents/BankAccountsTable";


function UserBankAccounts() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <BankAccountsTable
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default UserBankAccounts;
