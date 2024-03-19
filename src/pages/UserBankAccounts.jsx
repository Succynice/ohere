import React, { useState } from "react";
import BankAccountsTable from "../components/UserBankAccountsComponents/BankAccountsTable";
import SearchBar from "../components/UserBankAccountsComponents/SearchBar";

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
