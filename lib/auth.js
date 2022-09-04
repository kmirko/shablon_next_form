// import {hash, compare} from 'bcryptjs'

export async function passwordHash(passwoed){
    const hashedPassword = await hash(passwoed, 12);

    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword){
    const isVerify = await compare(password, hashedPassword);

    return isVerify;
}