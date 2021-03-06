const sinon = require('__tests__');
const { PostsMock } = require('./postsMock');

/**
 * list of stubs
 */
const findStub = sinon.stub();
const limitStub = sinon.stub();
const sortStub = sinon.stub();
const skipStub = sinon.stub();
const countDocumentsStub = sinon.stub();
const createStub = sinon.stub();
const updateOneStub = sinon.stub();
const findOneStub = sinon.stub();

/**
 * stubs by posts
 */
skipStub.withArgs(0).resolves(PostsMock);
skipStub.withArgs(20).resolves([]);
sortStub.withArgs('-_id').returns({ skip: (query) => skipStub(query) });
sortStub.withArgs('title').returns({ skip: (query) => skipStub(query) });
limitStub.withArgs(10).returns({ sort: (query) => sortStub(query) });
limitStub.withArgs(20).returns({ sort: (query) => sortStub(query) });
findStub.withArgs({ isPublic: true, isDisabled: false })
  .returns({ limit: (query) => limitStub(query) });

countDocumentsStub.withArgs({ isPublic: true, isActive: true }).resolves(PostsMock.length);
createStub.withArgs({
  title: '',
  description: '',
  cover: '',
  body: '',
  keywords: '',
  slug: 'this-my-posts',
  views: 0,
  timeShared: 0,
  likes: 0,
  isPublic: false,
}).resolves(PostsMock[0]);
updateOneStub.withArgs(
  { slug: PostsMock[0].slug },
  { isActive: false },
).resolves({ nModified: 1 });
updateOneStub.withArgs(
  { slug: 'error' },
  { isActive: false },
).resolves({ nModified: 1 });
updateOneStub.withArgs(
  { slug: PostsMock[0].slug },
  { title: 'this is a new title' },
).resolves({ nModified: 1 });
updateOneStub.withArgs(
  { slug: 'error' },
  { title: 'this is a new title' },
).resolves({ nModified: 1 });
findOneStub.withArgs({
  slug: PostsMock[0].slug,
  isPublic: true,
  isDisabled: false,
}).resolves(PostsMock[0]);
findOneStub.withArgs({
  slug: 'error',
  isPublic: true,
  isDisabled: false,
}).resolves(false);

const find = (query) => findStub(query);
const countDocuments = (query) => countDocumentsStub(query);
const create = (query) => createStub(query);
const updateOne = (query, data) => updateOneStub(query, data);
const findOne = (query) => findOneStub(query);

module.exports = {
  findStub,
  countDocumentsStub,
  createStub,
  updateOneStub,
  findOneStub,
  mongoMock: {
    find,
    countDocuments,
    create,
    updateOne,
    findOne,
  },
};
