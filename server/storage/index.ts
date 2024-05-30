export default defineEventHandler(async (event) => {
    // List all keys with
    const keys = await useStorage('redis').getKeys()

    // Set a key with
    await useStorage('redis').setItem('foo', 'bar')

    // Remove a key with
    await useStorage('redis').removeItem('foo')

    return {}
})