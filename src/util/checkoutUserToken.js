import axios from "axios";
import { getToken } from "./token";

export function isLoggedIn() {
  const userToken = localStorage.getItem("token");
  return !!userToken;
}

export const checkoutUserToken = async () => {
  const token = getToken();

  try {
    const response = await axios.get("http://3.38.191.164/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      localStorage.clear();
      console.log("토큰이 제거되었습니다 ->", response);
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
