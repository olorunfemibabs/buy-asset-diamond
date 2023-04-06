import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Contract, ethers } from "ethers";
import { type } from "os";
import {
    erc20ABI,
    useAccount,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";

const MintToken = () => {
  return (
    <div>MintToken</div>
  )
}

export default MintToken