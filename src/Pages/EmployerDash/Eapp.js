import React, { useState } from 'react';
import styled from 'styled-components';

const ApplicationsPage = () => {
  // Sample application data
  const [applications, setApplications] = useState([
    { id: 1, jobTitle: 'Software Engineer', applicantName: 'John Doe', status: 'Pending' },
    { id: 2, jobTitle: 'Data Analyst', applicantName: 'Jane Smith', status: 'Reviewed' },
    { id: 3, jobTitle: 'Marketing Specialist', applicantName: 'Alice Johnson', status: 'Accepted' },
    { id: 4, jobTitle: 'UI/UX Designer', applicantName: 'Bob Williams', status: 'Rejected' },
    // Add more sample data as needed
  ]);

  // State for filtering and sorting
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('id');

  // Function to handle filtering applications
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Function to handle sorting applications
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter applications based on the filter keyword
  const filteredApplications = applications.filter(application =>
    application.jobTitle.toLowerCase().includes(filter.toLowerCase()) ||
    application.applicantName.toLowerCase().includes(filter.toLowerCase()) ||
    application.status.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort applications based on the selected sorting option
  const sortedApplications = filteredApplications.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <Container>
      <Filters>
        <FilterInput
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
        <SortSelect value={sortBy} onChange={handleSortChange}>
          <option value="id">Sort by ID</option>
          <option value="jobTitle">Sort by Job Title</option>
          <option value="applicantName">Sort by Applicant Name</option>
          <option value="status">Sort by Status</option>
        </SortSelect>
      </Filters>
      <ApplicationsTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Job Title</th>
            <th>Applicant Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedApplications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.jobTitle}</td>
              <td>{application.applicantName}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </ApplicationsTable>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 8px;
  width: 200px;
`;

const SortSelect = styled.select`
  padding: 8px;
`;

const ApplicationsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export default ApplicationsPage;
