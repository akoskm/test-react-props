import type Immutable from "immutable";

interface Props {
  user: Immutable.Map<string, any>;
}

function PermissionContainer({ user }: Props) {
  return (
    <div>
      <span>
        User {user.get("username")} doesn't have permission to access this page.
      </span>
    </div>
  );
}
export default PermissionContainer;
