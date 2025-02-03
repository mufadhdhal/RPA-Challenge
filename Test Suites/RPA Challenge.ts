<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>RPA Challenge</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>2c7c9c13-63c9-48f6-a456-c08abd6d6599</testSuiteGuid>
   <testCaseLink>
      <guid>f680dd5a-69b1-4d7f-8a6d-9b9a193ae63e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Open Browser</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>82c87bdd-8aae-4552-a111-31763492e031</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'First Name'</defaultValue>
         <description></description>
         <id>86372310-2540-42ce-ab39-a2be879eeb31</id>
         <masked>false</masked>
         <name>firstName</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/RPA Challenge</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>383127c0-ec52-4b53-a0ce-871409eb13ac</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-10</value>
         </iterationEntity>
         <testDataId>Data Files/Test Data RPA</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>First Name</value>
         <variableId>86372310-2540-42ce-ab39-a2be879eeb31</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Last Name </value>
         <variableId>629c84f3-6725-464b-be78-c46364dfc281</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Address</value>
         <variableId>30760d80-a668-4f3a-b8d1-3357525ab969</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Company Name</value>
         <variableId>32977666-03ea-48b9-8df2-7e24e71a30c9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Phone Number</value>
         <variableId>808fb331-3946-4346-a289-e2f39b24351a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Role in Company</value>
         <variableId>02994559-9095-4bb2-85e2-cd86ecf916b0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>383127c0-ec52-4b53-a0ce-871409eb13ac</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>37cabb40-7425-4a14-8fc6-704dfd87b906</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
