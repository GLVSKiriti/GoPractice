package airthmetic

type Adapter struct {
}

func NewAdapter() *Adapter {
	return &Adapter{}
}

func (airth Adapter) Addition(a int32, b int32) (int32, error) {
	return a + b, nil
}

func (airth Adapter) Subtraction(a int32, b int32) (int32, error) {
	return a - b, nil
}

func (airth Adapter) Multiplication(a int32, b int32) (int32, error) {
	return a * b, nil
}

func (airth Adapter) Division(a int32, b int32) (int32, error) {
	return a / b, nil
}
