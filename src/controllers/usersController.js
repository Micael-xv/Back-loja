import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/usersModel';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await User.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response,
      });
    }

    const response = await User.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [],
      });
    }

    return res.status(200).send({
      type: 'success',
      message: 'Registro carregado com sucesso',
      data: response,
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const create = async (dados, res) => {
  const {
    username,
    name,
    phone,
    passwordHash,
    role,
    cpf,
    email,
  } = dados;

  const response = await User.create({
    username,
    name,
    phone,
    passwordHash,
    role,
    cpf,
    email,
  });

  return res.status(200).send({
    type: 'success',
    message: 'Cadastro realizado com sucesso',
    data: response,
  });
};

const update = async (id, dados, res) => {
  const response = await User.findOne({ where: { id } });

  if (!response) {
    return res.status(200).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  Object.keys(dados).forEach((field) => (response[field] = dados[field]));

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
};

const persist = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id para deletar o registro',
        data: [],
      });
    }

    const response = await User.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [],
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [],
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      username, cpf, name, phone, password, email, role,
    } = req.body;

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email já foi utilizado!');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const response = await User.create({
      username,
      name,
      phone,
      role,
      passwordHash,
      cpf,
      email,
    });

    return res.status(201).send({
      message: 'Criado!',
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Usuário ou senha inválidos!');
    }

    const { passwordHash } = user;
    console.log(`${password} ${passwordHash}`);
    const isPasswordValid = await bcrypt.compare(password, passwordHash);

    if (isPasswordValid) {
      const token = jwt.sign(
        { userId: user.id, userName: user.name },
        process.env.SECRET_KEY,
        { expiresIn: '1h' },
      );

      return res.status(200).send({ token });
    }

    return res.status(400).send({ message: 'Usuário ou senha inválidos!' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: 'Ops!',
      error: error.message,
    });
  }
};

export default {
  get,
  update,
  persist,
  destroy,
  register,
  login,
};
