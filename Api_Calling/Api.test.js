import {apiCall} from './Api'

describe('apiCall_testing', () => {
    beforeEach(() =>{
        global.fetch =  jest.fn();
    });

    test('should return data when fetch is successful', async () => {
        const mockData = {message: 'Hello World'};

        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });

        const result = await apiCall('https://fakestoreapi.com/products');
        // console.log('🚀 ~ result:', result);
        expect(result).toEqual(mockData);
        expect(global.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
        console.log('~global.fetch:', global.fetch);
    });
    
    test('should handle fetch errors', async () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        console.log('🚀 ~ consoleSpy:', consoleSpy);

        global.fetch.mockRejectedValue(new Error('Network Error'));

        const result = await apiCall('https://fakestoreapi.com/products');
        console.log('🚀 ~ result:error', result);
        expect(result).toBeUndefined();
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Network Error'));
        consoleSpy.mockRestore();
    });
});
