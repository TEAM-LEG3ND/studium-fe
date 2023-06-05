import React from 'react';
import { useDispatch } from "react-redux";
import { showModal } from "@/modules/modal";

export const useModalTest = () => {
  const dispatch = useDispatch();

  const clickBtn = () => {
    dispatch(showModal('joinComplete'))
  }

  return {clickBtn}
}