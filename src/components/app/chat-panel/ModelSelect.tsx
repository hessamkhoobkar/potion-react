import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ModelSelect() {
  return (
    <Select defaultValue="lite">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="AI Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="lite">Potion lite</SelectItem>
          <SelectItem value="ultra" disabled>
            Potion Ultra
          </SelectItem>
          <SelectItem value="max" disabled>
            Potion MAX
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
