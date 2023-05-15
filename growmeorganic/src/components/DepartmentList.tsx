import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import db from './db.json'

export default function DepartmentList() {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleDepartmentChange = (department: string) => {
    if (selectedDepartments.includes(department)) {
      // Department is already selected, deselect it and all its sub-departments
      const updatedDepartments = selectedDepartments.filter((d) => d !== department);
      setSelectedDepartments(updatedDepartments);
      setSelectedSubDepartments([]);
    } else {
      // Department is not selected, select it and all its sub-departments
      const updatedDepartments = [...selectedDepartments, department];
      const departmentData = db.find((d) => d.department === department);
      const subDepartments = departmentData?.sub_departments ?? [];
      setSelectedDepartments(updatedDepartments);
      setSelectedSubDepartments(subDepartments);
    }
  };

  const handleSubDepartmentChange = (subDepartment: string) => {
    if (selectedSubDepartments.includes(subDepartment)) {
      // Sub-department is already selected, deselect it
      const updatedSubDepartments = selectedSubDepartments.filter((sd) => sd !== subDepartment);
      setSelectedSubDepartments(updatedSubDepartments);
    } else {
      // Sub-department is not selected, select it
      const updatedSubDepartments = [...selectedSubDepartments, subDepartment];
      setSelectedSubDepartments(updatedSubDepartments);
    }
  };

  const isDepartmentSelected = (department: string) => {
    return selectedDepartments.includes(department);
  };

  const isSubDepartmentSelected = (subDepartment: string) => {
    return selectedSubDepartments.includes(subDepartment);
  };

  return (
    <Box>
      {db.map((departmentData) => (
        <div key={departmentData.department}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDepartmentSelected(departmentData.department)}
                onChange={() => handleDepartmentChange(departmentData.department)}
              />
            }
            label={departmentData.department}
          />
          <ul>
            {departmentData.sub_departments.map((subDepartment) => (
              <li key={subDepartment}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isSubDepartmentSelected(subDepartment)}
                      onChange={() => handleSubDepartmentChange(subDepartment)}
                    />
                  }
                  label={subDepartment}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
}
