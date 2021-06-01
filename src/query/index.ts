import {
  Ethereum_Query,
  Input_getOwners,
  // Input_createTransaction,
  SafeTransaction,
  OperationType
} from "./w3"

export function getOwners(input: Input_getOwners): string[] {
  const res = Ethereum_Query.callView({
    address: input.safeContract,
    method: "function getOwners() view returns (address[])",
    args: null,
    connection: input.connection,
  });

  return res.split(",");
}

// TODO: WIP, need to finish port
/*export function createTransaction(input: Input_createTransaction): SafeTransaction {
  const safeTransactions = input.safeTransactions;
  const safeContract = input.safeContract;

  if (safeTransactions.length === 1) {
    const standardizedTransaction = standardizeSafeTransactionData(
      safeContract,
      safeTransactions[0]
    )
    return new SafeTransaction(standardizedTransaction)
  }
  const multiSendData = encodeMultiSendData(
    safeTransactions.map(standardizeMetaTransactionData)
  );
  const multiSendTransaction = {
    to: multiSendContract,
    value: '0',
    data: multiSendContract.interface.encodeFunctionData('multiSend', [
      multiSendData
    ]),
    operation: OperationType.DelegateCall
  }
  const standardizedTransaction = await standardizeSafeTransactionData(
    safeContract,
    multiSendTransaction
  )
  return new SafeTransaction(standardizedTransaction)
}*/
