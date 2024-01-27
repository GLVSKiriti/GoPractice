package api

import "hexstr_with_grpc/internal/ports"

type Adapter struct {
	db    ports.DbPort
	arith ports.AirthmeticPort
}

func NewAdapter(db ports.DbPort, arith ports.AirthmeticPort) *Adapter {
	return &Adapter{db: db, arith: arith}
}

func (apia Adapter) GetAddition(a, b int32) (int32, error) {
	result, err := apia.arith.Addition(a, b)
	if err != nil {
		return 0, err
	}

	err = apia.db.AddToHistory(result, "addition")
	if err != nil {
		return 0, err
	}

	return result, err
}

func (apia Adapter) GetSubtraction(a, b int32) (int32, error) {
	result, err := apia.arith.Subtraction(a, b)
	if err != nil {
		return 0, err
	}

	err = apia.db.AddToHistory(result, "subtraction")
	if err != nil {
		return 0, err
	}

	return result, err
}

func (apia Adapter) GetMultiplication(a, b int32) (int32, error) {
	result, err := apia.arith.Multiplication(a, b)
	if err != nil {
		return 0, err
	}

	err = apia.db.AddToHistory(result, "multiplication")
	if err != nil {
		return 0, err
	}

	return result, err
}

func (apia Adapter) GetDivision(a, b int32) (int32, error) {
	result, err := apia.arith.Division(a, b)
	if err != nil {
		return 0, err
	}

	err = apia.db.AddToHistory(result, "division")
	if err != nil {
		return 0, err
	}

	return result, err
}
