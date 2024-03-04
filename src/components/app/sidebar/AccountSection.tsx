import UpgradePlan from './UpgradePlan';
import UserDropdown from './UserDropdown';

export default function AccountSection() {
  return (
    <div className="flex w-full flex-col border-t p-2 pb-4">
      <UpgradePlan />
      <UserDropdown />
    </div>
  );
}
