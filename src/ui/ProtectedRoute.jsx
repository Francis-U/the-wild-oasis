import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // console.log("called protected route");
  // 1. load the authenticated

  const { isLoading, isAuthenticated } = useUser();

  ///2, if there is NO authenticated user, redirect to the /login page

  ////we are allowed to call the navigate funtion inside anoda fn like a callback fn or useEffect, so we useEffect

  useEffect(
    function () {
      // console.log("useeffect");

      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  ///3. while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  ///4 if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
