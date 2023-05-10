/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Raise Up',
    position: 'Co-founder',
    url: 'https://www.facebook.com/raiseupmarsiconuovo',
    startDate: '2021-01-01',
    summary: `Raise Up is a social redevelopment project funded by the European Union. 
    Our aim is to create a space that promotes inclusion, participation, and aggregation of the entire community. 
    We offer meetings and seminars on topics such as Start-Up, Euro planning and CVs, 
    to improve the level of hard and soft skills of students and professionals.`,
  },
  {
    name: 'Freelancer',
    position: 'CAD-CAM Operator',
    startDate: '2021-12-01',
    summary: `I collaborate with a carpentry company as a CAD-CAM operator, designing and manufacturing customized doors designs. 
    I meet customers' needs, talking to them in order to realize a tailor-made product as close as possible to their idea.`,
  },
  {
    name: 'University Language Center',
    position: 'Help Desk Assistant',
    startDate: '2019-04-01',
    endDate: '2019-06-28',
    summary: `I helped supervise the smooth running of the centre's examinations and provided information to students on organizational and functional issues. 
    I also ensured the proper functioning of the equipment in the various laboratories.`,
  },
];

export default work;
