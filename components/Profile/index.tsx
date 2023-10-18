import type Immutable from "immutable";
import PermissionContainer from "../PermissionsContainer";

interface Props {
  user: Immutable.Map<string, any>;
}

function Profile({ user }: Props) {
  return (
    <div>
      <span>
        {user.get("firstName")} {user.get("lastName")}, {user.get("age")}
      </span>
      <PermissionContainer user={user} />
    </div>
  );
}
export default Profile;
