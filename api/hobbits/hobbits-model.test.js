const db = require('../../data/dbConfig')
const Hobbits = require('./hobbits-model')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})
test('environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('getAll', () => {
    test('resolves all the hobbits in the table', async () => {
        const result = await Hobbits.getAll()
        expect(result).toHaveLength(4)
        expect(result[0]).toMatchObject({ name: 'sam' })
    })
})
