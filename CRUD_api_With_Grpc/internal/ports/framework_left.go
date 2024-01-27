package ports

type GRPCport interface {
	Run()
	GetAddition()
	GetSubtraction()
	GetMultiplication()
	GetDivision()
}
