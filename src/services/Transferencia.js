export async function getAllTransferencias() {

    try{
        const response = await fetch('/api/findAll');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}