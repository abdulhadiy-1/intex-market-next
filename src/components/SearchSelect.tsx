import { Select } from 'antd';
import type { Dispatch, SetStateAction } from 'react';

interface SearchSelectProps {
  placeholder?: string;
  onChange?: Dispatch<SetStateAction<number | null>>;
  value?: number | null;
}

const SearchSelect: React.FC<SearchSelectProps> = ({ placeholder, onChange, value }) => (
  <Select
    showSearch
    className="w-full !border-b-[1px]"
    style={{ height: 43 }}
    value={value}
    onChange={(val) => onChange?.(val)}
    variant="borderless"
    placeholder={placeholder}
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      { value: 1, label: 'Not Identified' },
      { value: 2, label: 'Closed' },
      { value: 3, label: 'Communicated' },
      { value: 4, label: 'Identified' },
      { value: 5, label: 'Resolved' },
      { value: 6, label: 'Cancelled' },
    ]}
  />
);

export default SearchSelect;
