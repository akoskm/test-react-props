import { Map } from "immutable";
import { render, screen } from "@testing-library/react";
import Profile from "./index";

const profileFn = jest.fn();
jest.mock('../PermissionsContainer', () => (props:any) => profileFn(props));

describe("Profile", () => {
  const user = Map({
    firstName: "John",
    lastName: "Doe",
    age: 35,
    profileId: "1234-fake-4567-uuid",
    email: "john.doe@example.com",
    phone: "+1-555-555-5555",
    company: "Acme Inc.",
    jobTitle: "Software Engineer",
  });

  const renderProfile = () => render(<Profile user={user} />);

  test("renders app", () => {
    profileFn.mockImplementation(props => {
      const Profile = jest.requireActual(
        '../PermissionsContainer',
      ).default;
      return <Profile {...props} />;
    });
    renderProfile();
    expect(profileFn).toHaveBeenCalledWith({
      user
    })
  });
});
