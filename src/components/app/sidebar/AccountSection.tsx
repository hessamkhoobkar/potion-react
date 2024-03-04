import UpgradePlan from './UpgradePlan';
import UserDropdown from './UserDropdown';

export default function AccountSection() {
  return (
    <div className="flex w-full flex-col border-t pb-4 pe-2 ps-3 pt-2">
      <UpgradePlan />
      <UserDropdown />
    </div>
  );
}
